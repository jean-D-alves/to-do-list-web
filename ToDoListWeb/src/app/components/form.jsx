import "../css/form.css"
export default function Form({ func,title, fields }) {
  return (
    <form onSubmit={func}>
      <h1>{title || null}</h1>
      {fields.map((fields, index) => (
        <div className="input-group" key={index}>
          <label>{fields.label}</label>
          <input
            type={fields.type}
            name={fields.name}
            value={fields.value}
            placeholder={fields.placeholder}
            onChange={(e)=> fields.set(e.target.value)}
          />
        </div>
      ))}
      <button type="submit">submit</button>
    </form>
  );
}
