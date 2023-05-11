import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import { fetchDetailsJob, fetchListJob } from "../store/action";
export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initial = useSelector((state) => state);
  const [form, setform] = useState({
    description: "",
    location: "",
    full_time: "",
  });

  console.log(initial);
  const handleChange = (e) => {
    const { value, name } = e.target;

    const getForm = {
      description: form.description,
      location: form.location,
      full_time: form.full_time,
    };
    getForm[name] = value;
    setform(getForm);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      fetchListJob(form, () => {
        console.log("berhasil");
      })
    );
  };

  const getDetailsJob = (e, id) => {
    e.preventDefault();
    console.log("<<<");
    dispatch(
      fetchDetailsJob(id, () => {
        navigate(`/home/details/${id}`);
      })
    );
  };

  useEffect(() => {
    dispatch(fetchListJob());
  }, [dispatch]);

  if (initial.job.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <form style={{ display: "flex" }} className="mt-3" onSubmit={submitForm}>
        <div class="form-group ml-1">
          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            class="form-control"
            id="description"
            aria-describedby="description"
            placeholder="Description"
            onChange={handleChange}
          />
          <small id="emailHelp" class="form-text text-muted">
            Search
          </small>
        </div>
        <div class="form-group ml-3">
          <label for="location">Location</label>
          <input
            type="text"
            name="location"
            class="form-control"
            id="location"
            placeholder="Location"
            onChange={handleChange}
          />
        </div>
        <div class="form-group ml-3">
          <label for="full_time">Full Time ?</label>
          <input
            type="checkbox"
            name="full_time"
            class="form-control"
            id="full_time"
            value={"true"}
            placeholder="Password"
            style={{ width: "1rem" }}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary ml-3"
          style={{ height: "2.4rem", marginTop: "2rem", width: "10rem" }}
        >
          Submit
        </button>
      </form>
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              Previous
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2 <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <table class="table table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">Job Title</th>
            <th scope="col">Job Type</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody>
          {initial.job.jobs.map((data) => {
            return (
              <tr onClick={(e) => getDetailsJob(e, data.id)} className="hover">
                <th scope="row">{data.title}</th>
                <td>{data.type}</td>
                <td>{data.company}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
