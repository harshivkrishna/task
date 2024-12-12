import React from 'react'
import './NewTicket.css'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import fileUpload from '../../src/assets/file_upload.svg'
import captcha from '../../src/assets/captcha.svg'
const NewTicket = () => {
  return (
    <div>
        <Navbar/>
      
        <div className='new-ticket-container'>
          <Sidebar value={2}/>
          <div className='create-ticket-container'>
              <h1>Create New Ticket</h1>
              <div className='form-container-top'>
                    <div>
                      <div className='input-container'>
                      <label htmlFor="">Ticket No.</label>
                      <input type="number" />
                      </div>
                      <div className='input-container' >
                      <label htmlFor="">Name:</label>
                      <input type="text" />
                      </div>
                    </div>

                    <div>
                      <div className='input-container'>
                      <label htmlFor="">Name:</label>
                      <input type="text" />
                      </div>
                      <div className='input-container'>
                      <label htmlFor="">Department:</label>
                      <input type="text" />
                      </div>
                    </div>
              </div>
              <div className='subject-container'>
              <label htmlFor="" className='subject-label'>Subject:</label>
              <input type="text" name="" id="" className='input' />
              </div>

              <div className="form-container-bottom">
                <div className='form-container-bottom-left'>
                      <label htmlFor="">Category:</label>
                      <input type="text" />
                      <label htmlFor="">Type:</label>
                      <input type="text" />
                      <label htmlFor="">Priority:</label>
                      <input type="text" />
                </div>
                <div className="form-container-bottom-right">
                  <label htmlFor="">Description:</label>
                  <textarea name="" id="" cols="30" rows="10">
                  </textarea>
                    <label for="file-upload" class="upload-icon">
                    <input type="file" id="file-upload" hidden />
                    <img src={fileUpload} alt="" />
                  </label>
                </div>
              </div>
              <div className='button-container'>
                <img src={captcha} alt="" />
                <button type='submit' className='submit-btn'>Submit</button>
              </div>
          </div>
        </div>
        </div>
  )
}

export default NewTicket