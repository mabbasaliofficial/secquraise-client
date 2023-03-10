import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddPerson = () => {
  const imgHostKey = process.env.REACT_APP_imgbb_key;
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleProducts = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const member = {
            userId: data.id,
            name: data.name,
            image: imgData.data.url,
            location: data.location,
            gender: data.gender,
            date: data.date,
            time: data.time,
          };
          console.log(member);
          fetch("https://server-side-data-beta.vercel.app/create", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(member),
          })
            .then((res) => res.json())
            .then((d) => {
              toast.success("Member Added Successfully");
              reset();
              window.location.reload(true);
            });
        }
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center my-10">
        <div className="card border lg:w-3/4 md:w-96 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleProducts)}>
              <h1 className="text-3xl font-bold text-center">Add A Member</h1>
              <div className="flex justify-between">
                <div className="form-control w-1/2 mr-2">
                  <label className="label">
                    <span className="label-text">ID</span>
                  </label>
                  <input
                    {...register("id", { required: "ID is required" })}
                    type="text"
                    placeholder="Write Your ID"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text-alt text-error">{errors?.id?.message}</span>
                  </label>
                </div>
                <div className="form-control w-1/2 ml-2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Write Your Name"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text-alt text-error">{errors?.name?.message}</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="form-control w-1/2 mr-2">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <select
                    className="select select-bordered"
                    {...register("location", { required: "Location is required" })}
                  >
                    <option value="Chennai" selected>
                      Chennai
                    </option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bangalore">Bangalore</option>
                  </select>
                </div>
                <div className="form-control w-1/2 ml-2">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select className="select select-bordered" {...register("gender")} required>
                    <option value="Male" selected>
                      Male
                    </option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="form-control w-1/2 mr-2">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    {...register("date", { required: "Date is required" })}
                    type="date"
                    name="date"
                    className="input input-bordered"
                    id=""
                  />
                  <label className="label">
                    <span className="label-text-alt text-error">{errors?.date?.message}</span>
                  </label>
                </div>
                <div className="form-control w-1/2 ml-2">
                  <label className="label">
                    <span className="label-text">Time</span>
                  </label>
                  <input
                    {...register("time", { required: "Time is required" })}
                    name="time"
                    type="time"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text-alt text-error">{errors?.time?.message}</span>
                  </label>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: "Image is required" })}
                  className="file-input file-input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text-alt text-error">{errors?.image?.message}</span>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Add Member" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPerson;
