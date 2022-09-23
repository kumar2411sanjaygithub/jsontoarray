import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'


const Alertmsg = (show)=>{
	// console.log('d',show.msg)
	return(
		<>
			{show.msg!='' && <Alert variant="danger">
		        <Alert.Heading>Sorry!</Alert.Heading>
		        <p>{show.msg}
		        </p>
		      </Alert>}
		</>)
}

export default Alertmsg