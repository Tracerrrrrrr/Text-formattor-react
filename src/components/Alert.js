import React from 'react'

export default function Alert(props) {
    return (
        <div>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.title}</strong>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
        </div>
    )
}
