export default function Rating({ value, text, color }) {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((index) => (
          <span key={index}>
            <i
              style={{ color }}
              className={
                value >= index
                  ? 'fas fa-star'
                  : value >= index - 0.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          </span>
        ))}
        <span className="ml-2">{text && text}</span>
      </div>
    );
  }