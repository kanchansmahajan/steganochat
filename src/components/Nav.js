import React from 'react'
import { useNavigate} from "react-router-dom";

function Nav() {
    const history = useNavigate();
	  
		const uploadImage = () => {
			history("/UploadImage");
		}
  return (
	<div className="layout">
		 <div class="navigation">
					<div class="container">
						<div class="inside">
							<div class="nav nav-tab menu">
								<button class="btn"><img class="avatar-xl" src="img/avatars/avatar-male-1.jpg" alt="avatar"/></button>
								<a href="#members" data-toggle="tab"><i class="material-icons">account_circle</i></a>
								<a href="#discussions" data-toggle="tab" class="active"><i class="material-icons active">chat_bubble_outline</i></a>
								<a href="#notifications" data-toggle="tab" class="f-grow1"><i class="material-icons">notifications_none</i>
								</a>
								<button class="btn upload_fold" id="uplbtn"  onClick={uploadImage}><i class="fa fa-folder material-icons" ></i></button>
								<button class="btn mode"><i class="material-icons">brightness_2</i></button>
								<a href="#settings" data-toggle="tab"><i class="material-icons">settings</i></a>
								<button class="btn power" onclick="uploadImage"><i class="material-icons">power_settings_new</i></button>
							</div>
						</div>
					</div>
			</div>
	</div>
   
  )
}

export default Nav


