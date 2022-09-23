import React from 'react';
import { useForm } from 'react-hook-form';

export const LibraryForm = ({ library, onSubmit }) => {
  console.log(library);
  console.log(library.name);
  const { register, handleSubmit } = useForm( { defaultValues: { name: library ? library.name : "", country: library ? library.country : "", city: library ? library.city : "", postal_code: library ? library.postal_code : "", street: library ? library.street : "", phonenumber: library ? library.phonenumber : "" } });
    const submitHandler = handleSubmit((data) =>  {
        onSubmit(data);
    });

    return (
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            {...register("name", { required: "Required" })}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="country">Country:</label>
          <input
            className="form-control"
            {...register("country", { required: "Required" })}
            type="text"
            name="country"
            id="country"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="city">City:</label>
          <input
            className="form-control"
            {...register("city", { required: "Required" })}
            type="text"
            name="city"
            id="city"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="postal_code">Postal code:</label>
          <input
            className="form-control"
            {...register("postal_code", { required: "Required" })}
            type="text"
            name="postal_code"
            id="postal_code"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="street">Street:</label>
          <input
            className="form-control"
            {...register("street", { required: "Required" })}
            type="text"
            name="street"
            id="street"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="phonenumber">Phonenumber:</label>
          <input
            className="form-control"
            {...register("phonenumber", { required: "Required" })}
            type="text"
            name="phonenumber"
            id="phonenumber"
          />
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary">
            Save Library
          </button>
        </div>
      </form>
    );
}