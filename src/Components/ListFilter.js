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
      <div className="inline_alignment">
        <form>
          <label>
            Filter by: Block
            <select
              id='block'
              onChange={this.handleChange}
              className='form_list'
            >
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
