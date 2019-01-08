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
    const newSettings = { ...this.props }
    const { mode, player, theme } = newSettings;

    const changeSettings = ({ type, newValue }) => {
      newSettings = { ...newSettings, [type]: newValue }
    }

    swal({
      title: 'Game Settings',
      html: `
        <div class="options-items">
          <div class="options-item ${mode === 'human' && 'active'}">
            <ion-icon name="contacts"></ion-icon> Human
          </div>
          <div class="options-item ${mode === 'ai' && 'active'}">
            <ion-icon name="desktop"></ion-icon> AI
          </div>
        </div>
        <div class="options-items">
          <div class="options-item ${player === 'cross' && 'active'}">
            <ion-icon name="close"></ion-icon> Cross
          </div>
          <div class="options-item ${mode === 'circle' && 'active'}">
            <ion-icon name="radio-button-off"></ion-icon> Circle
          </div>
        </div>
        <div class="options-items">
          <div class="options-item ${theme === 'light' && 'active'}">
            <ion-icon name="sunny"></ion-icon> Light
          </div>
          <div class="options-item ${theme === 'dark' && 'active'}">
            <ion-icon name="moon"></ion-icon> Dark
          </div>
        </div>
      `,
      confirmButtonText: 'Save',
      showCancelButton: true,
      cancelButtonText: 'Cancel'
    }).then((result) => {
      this.props.changeSettings(newSettings)
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