import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../action';
import {withRouter} from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const reviewFields = _.map(formFields, field => {
    return(
      <div key={field.name}> 
        <label>{field.label}</label>
        <div>
          {formValues[field.name]}
        </div>
      </div>
    );
  })

  return(
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat"
        onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="teal btn-flat right"
      >
        Confirm
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));