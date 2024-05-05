import './style.css';

interface IProps {
  value: string | number;
  onInput?: Function
  onEnter?: Function
  placeholder?: string
}

export const Input = ({
  value,
  placeholder,
  onInput = () => { },
  onEnter = () => { }
}: IProps) => {
  const onChange = (e: any) => {
    onInput(e.target.value)
  }
  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onInput(e.target.value)
      onEnter(e.target.value)
    }
  }
  return (
    <div className="base-input-wrapper">
      <input type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder}
        className="input text-text-dark !h-60px !bg-bg-clear-50 text-start input-bordered input-primary w-full" />
    </div>
  )
};