const ReviewAnswers = ({answered}) => {
  return (
    <>
        <div className="seekho__review seekho__border seekho__mr-20">
            <div className="seekho__flex seekho__flex-col">
                <div className="seekho__flex seekho__flex-col">
                    <h2>SEEKHO</h2>
                    <h4>Review Answers Here</h4>
                </div>
                <div>
                    {Object.values(answered).map((ans, index) => {
                        return (
                            <h4 key={index}> #{index + 1}: {ans}</h4>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default ReviewAnswers;