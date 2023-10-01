import React from 'react';

const Form = ({
  email,
  title,
  description,
  materials,
  handleEmailChange,
  handleTitleChange,
  handleDescriptionChange,
  handleMaterialsChange,
  handleSubmit,
}) => {
    return (
        <div className='contact-us'>
            <h2>Custom Order</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
            Email:
            <br />
            <input
              id="email"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <br />
          <label htmlFor="title">
            Your Name:
            <br />
            <textarea
              id="title"
              placeholder="Your Name"
              value={title}
              onChange={handleTitleChange}
            ></textarea>
          </label>
          <br />
          <label htmlFor="description">
            Description:
            <br />
            <textarea
              id="description"
              placeholder="Description of what you would like made."
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </label>
          <br />
          <label htmlFor="materials">
            Materials:
            <br />
            <textarea
              id="materials"
              placeholder="Specific materials you want used?"
              value={materials}
              onChange={handleMaterialsChange}
            ></textarea>
          </label>
          <br />
        <button id="submit-button" type="submit" value="Submit">
        Submit
      </button>
    </form>
    </div>
  );
};

export default Form;