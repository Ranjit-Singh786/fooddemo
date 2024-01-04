const Shimmer = () => {
    console.log("yes working")
    
    return (
        <>
        {Array.from({length:10}).map((_, index) => (
            
            <div className="shimmer-container" key={index}>
        <div className="shimmer-effect"></div>
        {/* Add more shimmer elements if needed */}
        
      </div>
          ))}
      </>
    );
  };

  export default Shimmer;