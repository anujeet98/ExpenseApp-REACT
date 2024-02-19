import ChartBar from './ChartBar';
import './Chart.css';

const Chat = (props) => {
    const amountList = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValueCalc = Math.max(...amountList); 
    console.log(maxValueCalc)
    return (
        <div className='chart'>
            {
                props.dataPoints.map(dataPoint => (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maxValueCalc}
                        label={dataPoint.label}
                    />
                ))
            }            
        </div>
    );
};

export default Chat;