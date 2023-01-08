import React, { ChangeEvent, FC, useState, MouseEvent } from "react";

const Form: FC = () => {
  const [email, setEmail] = useState<string>();
  const [reason, setReason] = useState<string>();
  const [response, setResponse] = useState<string>();

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const onReasonChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value);
  }

  const onSubmit = async (event: MouseEvent) => {
    event.preventDefault();

    const response = await fetch(`http://localhost:3001/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Version': '1'
      },
      body: JSON.stringify({ email: email, reason: reason })
    })

    setResponse(await response.text());
  }

  return <form>
    <input type="email" placeholder='E-mail' onChange={onEmailChange}></input>
    <br />
    <input type="text" placeholder='Reason' onChange={onReasonChange}></input>
    <br />
    <button type="submit" onClick={onSubmit}>Submit</button>
    <div>{response}</div>
  </form>;
}


export default Form;