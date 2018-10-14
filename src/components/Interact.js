import React, { Component, Fragment } from 'react'
import swal from 'sweetalert2'
import ReactTooltip from 'react-tooltip'

import './css/Interact.css'

class Interact extends Component {
  openAboutSwal = () => {
    swal({
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Tic-tac-toe.png',
      imageWidth: 200,
      imageHeight: 200,
      title: 'Tic Tac Boom!',
      text: 'Copyright 2018 Ilham Wahabi',
      confirmButtonText: 'Cool',
      footer: `
        <a class="see-github" href="https://github.com/IlhamWahabiGX/tictac-boom" target="_blank">
          See this project on &nbsp;<ion-icon name="logo-github"></ion-icon>
        </a>
      `
    })
  }

  openSettingsSwal = () => {
    swal({
      title: 'Game Settings',
      html: `
        <div class="options-items">
          <div class="options-item">
            <ion-icon name="contacts"></ion-icon>
            v.s Friend
          </div>
          <div class="options-item">
            <ion-icon name="desktop"></ion-icon>
            v.s Computer
          </div>
        </div>
        <div class="options-items">
          <div class="options-item">
            <ion-icon name="close"></ion-icon>
            Cross
          </div>
          <div class="options-item">
            <ion-icon name="radio-button-off"></ion-icon>
            Circle
          </div>
        </div>
        <div class="options-items">
          <div class="options-item">
            <ion-icon name="sunny"></ion-icon>
            Light
          </div>
          <div class="options-item">
            <ion-icon name="moon"></ion-icon>
            Dark
          </div>
        </div>
      `,
      confirmButtonText: 'Save',
      showCancelButton: true,
      cancelButtonText: 'Cancel'
    })
  }

  render() {
    return (
      <Fragment>

        <div data-tip data-for='settings' className="settings-button" onClick={this.openSettingsSwal}>
          <ion-icon name="settings" class="md-48 button-icon"></ion-icon>
        </div>
        
        <div data-tip data-for='about' className="about-button" onClick={this.openAboutSwal}>
          <ion-icon name="happy" class="md-48 button-icon"></ion-icon>
        </div>

        <ReactTooltip id='settings' place="right" type='dark' effect="solid">Settings</ReactTooltip>
        <ReactTooltip id='about' place="left" type='dark' effect="solid">About</ReactTooltip>

      </Fragment>
    )
  }
}

export default Interact