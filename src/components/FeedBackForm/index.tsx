import React, { useState } from 'react';
import './index.scss';
import {
  Button,
  Checkbox, FormControlLabel, Link, TextField, Typography
} from '@mui/material';
import { isMobile } from 'react-device-detect';
import arrow2 from '$images/arrow2.png';
import SvgIcons from '$common/SvgIcons';
import { useRootService } from '$hooks/useRootService';

function FeedBackForm(props) {
  const caption = 'ЗАПИШИСЬ НА ПРОБНОЕ ЗАНЯТИЕ';
  const free = 'Бесплатно';
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checked, setChecked] = useState(false);

  const service = useRootService().SheetService;

  return (
    <div id="invite" className="FeedBackForm">
      <div className="feedback-banner container d-flex flex-row w-100 gap-5">
        <div className="d-flex flex-column">
          <Typography color="black" variant="h2">
            {caption.toUpperCase()}
          </Typography>
          <Typography color="white" variant="h2">
            {free.toUpperCase()}
          </Typography>
          {!isMobile && <img className="align-self-end" width={178} src={arrow2} />}
          <div className="feedback-icons d-flex flex-row gap-4">
            <SvgIcons width={44} height={44} name="telegram" />
            <SvgIcons width={44} height={44} name="whatsapp" />
          </div>
        </div>
        <form
          className="d-flex flex-column"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            service.createRow(name, secondName, email, phone);
          }}
        >
          <TextField
            required
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            placeholder="Ваша фамилия"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
          <TextField
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <FormControlLabel
            labelPlacement="end"
            required
            control={(
              <Checkbox
                value={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
                style={{
                  color: 'white'
                }}
                required
              />
            )}
            label={(
              <div className="d-flex flex-row gap-2">
                <Typography variant="body2" color="white" style={{ textDecoration: 'underline' }}>
                  Даю согласие на обработку персональных данных
                </Typography>
              </div>
            )}
          />
          <Button size="large" variant="contained" type="submit" color="primary">
            Бесплатное занятие
          </Button>
        </form>
      </div>
    </div>
  );
}

export default FeedBackForm;
