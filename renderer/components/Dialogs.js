import React from 'react';
import classnames from 'classnames';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { connect } from 'react-redux';
import ExportDialog from './ExportDialog';
import ExportProgressDialog from './ExportProgressDialog';
import PrefillDialog from './PrefillDialog';
import TipsDialog from './TipsDialog';
import { IN_PROGRESS } from '../helpers/exportProgressStates';
import css from './Dialogs.css';

const overlayId = 'overlay';

const Dialogs = ({ currentDialog }) => (
  <CSSTransitionGroup
    transitionName={{
      appear: css.dialogAppear,
      appearActive: css.dialogAppearActive,
      enter: css.dialogEnter,
      enterActive: css.dialogEnterActive,
      leave: css.dialogLeave,
      leaveActive: css.dialogLeaveActive,
    }}
    transitionAppear
    transitionAppearTimeout={ 400 }
    transitionEnterTimeout={ 400 }
    transitionLeaveTimeout={ 200 }
  >
    { currentDialog ? (
      <div
        id={ overlayId }
        key="overlay"
        className={ css.overlay }
      >
        { currentDialog === 'tips' ? (
          <TipsDialog key="tips-dialog" />
        ) : null }
        { currentDialog === 'export' ? (
          <ExportDialog key="export-dialog" />
        ) : null }
        { currentDialog === 'exportProgress' ? (
          <ExportProgressDialog key="export-progress-dialog" />
        ) : null }
        { currentDialog === 'prefill' ? (
          <PrefillDialog key="prefill-dialog" />
        ) : null }
      </div>
    ) : null }
  </CSSTransitionGroup>
);

const mapStateToProps = state => ({
  currentDialog: Object.keys(state.dialogsVisibility).find(key => state.dialogsVisibility[key]),
});

export default connect(
  mapStateToProps,
  null,
)(Dialogs);
