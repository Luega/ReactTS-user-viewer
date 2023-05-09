import { FormEvent, useRef } from "react";
import classes from "./NameChangerForm.module.css";

type Props = {
  setNewName: (name: string) => void;
};

const NameChangerForm = (props: Props) => {
  let newName = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    props.setNewName(newName!.current!.value);
    newName!.current!.value = "";
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-80 p-2 mb-10 flex flex-col bg-white border border-black rounded-md shadow-lg"
    >
      <input ref={newName} type="text" placeholder="Name..." />
      <button type="submit">Change Name</button>
    </form>
  );
};

export default NameChangerForm;
