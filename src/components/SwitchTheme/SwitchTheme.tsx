export const SwtichTheme = ({
  onChange
}: any) => {
  return (
    <div className="w-188px h-88px flex items-center gap-8px fixed top-[-10px] right-20px">
      <h1>Switch Theme</h1>
      <input type="checkbox" className="toggle toggle-info" onChange={onChange} />
    </div>
  );
};