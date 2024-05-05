import './style.css';

interface IProps {
  value: string | number;
  onInput?: Function
  onEnter?: Function
}

export const Input = ({
  value,
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
    <div className="base-input-wrapper bg-bg-clear">
      <input type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder="Type here" className="input text-start input-bordered input-primary w-full" />
    </div>
  )
};