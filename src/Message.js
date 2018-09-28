import React from 'react';

import PropTypes from 'prop-types'

const Message = ({name, date, text, index}) => (
    <div>
      <div>
        <p className="bold">
          {
            name+" @ "+date.toISOString().slice(0, 19)
          }
        </p>
      </div>
      <div>
          <p>{text}</p>
      </div>
    </div>
  )

Message.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
}

export default Message