function Survey() {
  async function survey(formData: FormData) {
    "use server";
    const radioOne = formData.get("radioOne");
    const radioTwo = formData.get("radioTwo");
    const radioThree = formData.get("radioThree");

    await console.log(radioOne, radioTwo, radioThree);
    // Send data to server
  }
  return (
    <form action={survey}>
      <fieldset className="border border-gray-300 p-5 rounded-md mb-6">
        <legend className="text-xl mb-2">Survey</legend>
        <div className="mb-4">
          <label htmlFor="radioOne" className="block mb-1">
            Question 1
          </label>
          <input
            type="radio"
            id="radioOne"
            name="radioOne"
            value="option1"
            className="mx-2"
          />{" "}
          Yes
          <input
            type="radio"
            id="radioOne"
            name="radioOne"
            value="option2"
            className="mx-2"
          />{" "}
          No
          <input
            type="radio"
            id="radioOne"
            name="radioOne"
            value="option3"
            className="mx-2"
          />
          Maybe
        </div>
        <div className="mb-4">
          <label htmlFor="radioTwo" className="block mb-1">
            Question 2
          </label>
          <input
            type="radio"
            id="radioTwo"
            name="radioTwo"
            value="option1"
            className="mx-2"
          />{" "}
          Yes
          <input
            type="radio"
            id="radioTwo"
            name="radioTwo"
            value="option2"
            className="mx-2"
          />{" "}
          No
          <input
            type="radio"
            id="radioTwo"
            name="radioTwo"
            value="option3"
            className="mx-2"
          />{" "}
          Maybe
        </div>
        <div className="mb-4">
          <label htmlFor="radioThree" className="block mb-1">
            Question 3
          </label>
          <input
            type="radio"
            id="radioThree"
            name="radioThree"
            value="option1"
            className="mx-2"
          />{" "}
          Yes
          <input
            type="radio"
            id="radioThree"
            name="radioThree"
            value="option2"
            className="mx-2"
          />{" "}
          No
          <input
            type="radio"
            id="radioThree"
            name="radioThree"
            value="option3"
            className="mx-2"
          />{" "}
          Maybe
        </div>
        <button type="submit" className="px-5 py-2 btn">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default Survey;
