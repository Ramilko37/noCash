import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    'iconBg': { background: 'linear-gradient(90deg, #DFAF3F 0%, #E15C5C 100%)'}
})



interface IProps {
    starValue: number | null
    handleStarValue: (e: number | null) => void
}

const Stars: React.FC<IProps> = ({starValue, handleStarValue}) =>  {
    return (
        <div>
            <Box component="fieldset" mb={1} borderColor="transparent">
                <Rating
                    className="mb-0 content-between"
                    name="simple-controlled"
                    value={starValue}
                    onChange={(event, newValue) => {
                        handleStarValue(newValue);
                    }}
                    size="large"
                />
            </Box>
        </div>
    )}

export default Stars;