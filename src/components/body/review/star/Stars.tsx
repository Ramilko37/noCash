import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    'iconBg': { background: 'linear-gradient(90deg, #DFAF3F 0%, #E15C5C 100%)'}
})


export default function Stars() {
    const [value, setValue] = React.useState<number | null>(2);

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    className="mb-0 content-between"
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    size="large"
                />
            </Box>
        </div>
    )}

