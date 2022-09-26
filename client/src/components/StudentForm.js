import React from 'react';
import { useForm } from 'react-hook-form';

export const StudentForm = ({ student, onSubmit }) => {
  const { register, handleSubmit } = useForm( { defaultValues: { first_name: student ? student.first_name : "", last_name: student ? student.last_name : "", birthdate: student ? student.birthdate : "", study_subject: student ? student.study_subject : "", country: student ? student.country : "", city: student ? student.city : "", postal_code: student ? student.postal_code : "", street: student ? student.street : "", phonenumber: student ? student.phonenumber : "" } });
    const submitHandler = handleSubmit((data) =>  {
        onSubmit(data);
    });

    return (
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="first_name">First name:</label>
          <input
            className="form-control"
            {...register("first_name", { required: "Required" })}
            type="text"
            name="first_name"
            id="first_name"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="last_name">Last name:</label>
          <input
            className="form-control"
            {...register("last_name", { required: "Required" })}
            type="text"
            name="last_name"
            id="last_name"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="birthdate">Birthdate:</label>
          <input
            className="form-control"
            {...register("birthdate", { required: "Required" })}
            type="date"
            name="birthdate"
            id="birthdate"
          />
        </div><div className="form-group mt-2">
          <label htmlFor="study_subject">Study subject:</label>
          <input
            className="form-control"
            {...register("study_subject", { required: "Required" })}
            type="text"
            name="study_subject"
            id="study_subject"
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
            Save Student
          </button>
        </div>
      </form>
    );
}