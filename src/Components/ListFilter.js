import React from 'react';

class ListFilter extends React.Component {
  handleChange = (event) => {
    if (event.target.value === 'All') {
      this.props.filterChange('');
    } else {
      this.props.filterChange(event.target.value);
    }
  };

  blocks = ['All', 'fun', 'be', 'fe', 'proj', 'grad'];
  render() {
    return (
      <div className="filter_students">
        <h2>Filter by</h2>
        <form>
          <label>
            Block
            <select id="block" onChange={this.handleChange}>
              {this.blocks.map((block) => {
                return (
                  <option key={block} value={block}>
                    {block.toUpperCase()}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default ListFilter;
