import {
  createContext,
  ReactNode,
  useState,
  useMemo,
  useContext,
  useRef,
  useEffect,
} from 'react';
import clickOutside from '../utils/clickOutSide';

interface IHeaderDropdownProps {
  children: ReactNode;
}
interface IThumbnailProps {
  children: ReactNode;
  name: string;
}
interface IDropBoxProps {
  children: ReactNode;
  name: string;
}
interface IContextValue {
  handleOpenDropdown?: (id: string) => void;
  openDropdownName?: string;
}

const HeaderDropdownContext = createContext<IContextValue>({});

function HeaderDropdown({ children }: IHeaderDropdownProps) {
  const [openDropdownName, setOpenDropdownName] = useState<string>('');
  const headerDropdownRef = useRef<HTMLDivElement>(null);

  const handleOpenDropdown = (id: string): void => {
    setOpenDropdownName(id);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any): void => {
      clickOutside(
        event,
        () => {
          handleOpenDropdown('');
        },
        headerDropdownRef
      );
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [headerDropdownRef]);

  const contextValue = useMemo(
    () => ({
      openDropdownName,
      handleOpenDropdown,
    }),
    [openDropdownName]
  );

  return (
    <HeaderDropdownContext.Provider value={contextValue}>
      <div ref={headerDropdownRef} className="relative">
        {children}
      </div>
    </HeaderDropdownContext.Provider>
  );
}

function Thumbnail({ children, name }: IThumbnailProps) {
  const { handleOpenDropdown, openDropdownName } = useContext<IContextValue>(
    HeaderDropdownContext
  );

  const handleClickThumbnail = () => {
    if (openDropdownName === name) {
      handleOpenDropdown?.('');
    } else {
      handleOpenDropdown?.(name);
    }
  };
  return (
    <div
      onClick={handleClickThumbnail}
      aria-hidden="true"
      className="cursor-pointer"
    >
      {children}
    </div>
  );
}

function DropBox({ children, name }: IDropBoxProps) {
  const { openDropdownName } = useContext<IContextValue>(HeaderDropdownContext);
  if (openDropdownName !== name) return undefined;
  return (
    <div className="absolute top-[150%] w-96 px-6 py-6 left-0  rounded-xl shadow-box animate-show">
      {children}
    </div>
  );
}

HeaderDropdown.Thumbnail = Thumbnail;
HeaderDropdown.DropBox = DropBox;
export default HeaderDropdown;