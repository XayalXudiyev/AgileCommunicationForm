import { Autocomplete, TextField } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import './CardHeadingTitle.css'

const CardHeadingTitle = () => {
  return (
    <div className='cardHeadingTitle'>
      <div>
        <FontAwesomeIcon icon={faDesktop} />
        <p>Agile Communication</p>
        <p>Form Card<sup>™</sup></p>
      </div>
      <div style={{ width: '60%' }}>
        <Autocomplete
          options={["Məhsul Silinmə (Əlavə et/ Dəyiş)", "Məhsul Silinmə Siyahısı"]} ç
          renderInput={(params) => <TextField {...params} label="Məhsul Silinmə (Əlavə et/ Dəyiş)" />}
        />
      </div>
    </div>
  )
}

export default CardHeadingTitle