interface IBadgeProps {
  text: string | number;
  color?: 'success' | 'error';
  rounded?: boolean;
  size?: 'sm' | 'md';
}
export default function Badge({
  text,
  color = 'success',
  rounded = false,
  size = 'md',
}: IBadgeProps) {
  return (
    <div
      className={`border py-1 px-3 font-bold
      ${size === 'sm' ? 'text-sm' : ''}
      ${rounded ? 'rounded-full' : 'rounded-lg'}
      ${color === 'success' ? ' bg-green-100 text-green-900' : ''}
      ${color === 'error' ? ' bg-red-100 text-red-900' : ''}`}
    >
      <p>{text}</p>
    </div>
  );
}