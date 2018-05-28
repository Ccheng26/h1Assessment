import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MaterialTitlePanel from './material_title_panel';
import PropTypes from 'prop-types';
import { selectCompany } from 'actions'


const styles = {
  sidebar: {
    width: '100%',
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    backgroundColor: '#fff',
    padding: '16px',
    height: '100%',
    color: '#000',
  },
};

function handleClick(event, props){
  props.selectCompany(event.target.text)
}

const _SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;
  const links = [];
  const companyNames = Boolean(props.loanData) ? Object.keys(props.loanData) : ['']
  for (let i = 0; i < companyNames.length; i++) {
    links.push(
      <a key={i} onClick={(e)=>handleClick(e, props)} style={styles.sidebarLink}>{companyNames[i]}</a>);
  }

  return (
    <MaterialTitlePanel title="Applicants By Company" style={style}>
      <div style={styles.content}>
        <div style={styles.divider} />
        {links}
      </div>
    </MaterialTitlePanel>
  );
};

const mapStateToProps = state => {
  return {
      loanData: state.loanData
  }
}

const mapDispatchToProps = dispatch => {
  const mapped = bindActionCreators({selectCompany}, dispatch)
  return mapped
}

const SidebarContent = connect(mapStateToProps, mapDispatchToProps)(_SidebarContent)
export default SidebarContent;