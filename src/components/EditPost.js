import React from 'react';



class EditPostComp extends React.Component {
  render() {
    return (
      <div className="addpost addpost-container">
      <div className="add-new-posts">
        <div className="close">
          <i className="fas fa-window-close" />
        </div>
        <div className="add-a-new-post">- Edit your post -</div>
        <form action>
          <div className="form-group2">
            <input
              type="text"
              className="title-photo"
              name="title-input"
              id="title-input"
              placeholder="Name of Building"
            />
          </div>
          <div className="form-group2">
            <input
              type="text"
              className="location-photo"
              name="location-input"
              id="location-input"
              placeholder="Location"
            />
          </div>
          <div className="form-group2">
            <input
              type="text"
              className="post-desc"
              name="post-desc-name"
              id="post-desc"
              placeholder="Write a short description."
            />
          </div>
          <div className="form-group2">
            <button className="inside-input">
              <i className="fas fa-plus" />
            </button>
            <input
              type="text"
              className="upload-images"
              name="location-input"
              id="location-input"
              placeholder=" Upload images"
            />
          </div>
          <div className="buttons-addpostdone">
            <button type="button" className="btn btn-newpostdone">
              Done
            </button>
          </div>
        </form>
      </div>
      <div className="footer">
        <div className="footer-gradient" />
        <div className="tab-tab1">
          <i className="fas fa-building" />
        </div>
        <div className="tab-tab2">
          <i className="fas fa-plus" />
        </div>
        <div className="tab-tab3">
          <i className="fas fa-star" />
        </div>
      </div>
    </div>
    )
  }
}

export default EditPostComp;