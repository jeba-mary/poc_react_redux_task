import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div className="experience-info">
        <div className="container-fluid">
          <form>
              <div class="form-group">
                <label for="total_experience">Total Experience</label>
                <input type="text" class="form-control" id="total_experience"/>
              </div>
              <div className="text-center">
								<button type="submit" className="btn">Save</button>
							</div>
          </form>
        </div>
      </div>
    )
  }
}

export default Experience;