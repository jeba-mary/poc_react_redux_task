import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <div className="education-info">
        <div className="container-fluid">
          <form>
              <div class="form-group">
                <label for="ug">UG</label>
                <input type="text" class="form-control" id="ug"/>
              </div>
              <div class="form-group">
                <label for="pg">PG</label>
                <input type="text" class="form-control" id="pg"/>
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

export default Education;