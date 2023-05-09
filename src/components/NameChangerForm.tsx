import { FormEvent, useRef } from "react";
import classes from "./NameChangerForm.module.css";
type Props = {
  setNewName: (name: string) => void;
};

const NameChangerForm = (props: Props) => {
  let newName = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (
      !/^\s*$/.test(newName!.current!.value) &&
      !/[0-9]/.test(newName!.current!.value)
    ) {
      props.setNewName(newName!.current!.value);
    }
    newName!.current!.value = "";
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${classes.user__formName} w-80 px-4 py-2 mb-10 text-white flex flex-col border border-black rounded-md shadow-lg`}
    >
      <input
        className="placeholder:text-white placeholder:italic"
        ref={newName}
        type="text"
        placeholder="New name..."
        required
      />
      <button type="submit">Change</button>
    </form>
  );
};

export default NameChangerForm;
