import React from "react";
import { Link } from "react-router-dom";


export const AddContact = () => {
    return (
	<div className="text-center mt-5">
		<h1>Hello Diana!</h1>
		<form>
		<div claseName="mb-3">
			<label for="exampleInputEmail1" claseName="form-label">Email address</label>
			<input type="email" claseName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
			<div id="emailHelp" claseName="form-text">We'll never share your email with anyone else.</div>
		</div>
	<div claseName="mb-3">
		<label for="exampleInputPassword1" claseName="form-label">Password</label>
		<input type="password" claseName="form-control" id="exampleInputPassword1"/>
	</div>
	<div claseName="mb-3 form-check">
		<input type="checkbox" claseName="form-check-input" id="exampleCheck1"/>
		<label claseName="form-check-label" for="exampleCheck1">Check me out</label>
	</div>
	<button type="submit" claseName="btn btn-primary">Submit</button>
	</form>
	<Link to="/">
					<button className="btn btn-success">Check the Context in action</button>
				</Link>
	</div>
);
}