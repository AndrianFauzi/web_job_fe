import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchDetailsJob, fetchListJob } from "../store/action";

export default function DetailJobPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initial = useSelector((state) => state);

  console.log(initial);
  if (initial.job.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mt-3">
        <Link to="/home" type="button" class="btn btn-primary">
          Back
        </Link>
        <h1>
          {initial.job.details.title} - {initial.job.details.type}
        </h1>
        <h2>{initial.job.details.company}</h2>
        <h5>description :</h5>
        <div
          dangerouslySetInnerHTML={{ __html: initial.job.details.description }}
        />
        <h5>How to Apply ?</h5>
        <div
          dangerouslySetInnerHTML={{ __html: initial.job.details.how_to_apply }}
        />
      </div>
    </>
  );
}
