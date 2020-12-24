  
import React from 'react';
import '../../App.css';
import Card from '../Card'
import AnalysisCard from '../AnalysisCard'
import Navbar from '../Navbar';
import '../Navbar.css'

function Projects() {
  return (
     <div>
      <Navbar></Navbar>
    <div className='projects-container'>
    
    <div className='cards-container'>
      <div className='col-1'>
    <AnalysisCard title ='FIFA Analysis' 
          imageUrl='https://dartfrog.gg/wp-content/uploads/2020/01/FIFA-20-Luis-Alberto-Bugs-INternet.jpg'
          body='Analysis of FIFA players using linear regression, logistic regression and decision trees. Developed in Rstudio and Rmarkdown. '
          github='https://github.com/Mannarinoo/Deal-Finder'
          redirect='/fifa'/>
    <Card title ='Brick Breaker' 
          imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpppLd0pbcGES1aWrMiH1VqY3m1QqJEz14qQ&usqp=CAU'
          body='Simple Brick Breaker application developed with Java AWT and Java Swing.'
          github='https://github.com/Mannarinoo/Brick-Breaker'/>
          </div>
      <div className='col-2'>
    <AnalysisCard title ='Boston Crime Analysis' 
          imageUrl='https://bostonpolicerelief.org/images/resources/logo.png'
          body='Analysis of crime incident reports in Boston using SQL and SQL Server Management Studio. Includes a customized embedded dashboard.'
          github='https://github.com/Mannarinoo/Boston-Crime-Data-Analysis/tree/master/Boston%20Crime%20Data%20Analysis'
          redirect='/bostoncrime'/>
    <Card title ='(In Progress)' 
          imageUrl={require('../../images/Logo.PNG')}
          body='Website that allows individuals to customize mass email campaigns. Made with react and python.'
          github='https://github.com/thangdaoo/mass-emailer'/>
          </div>
      <div className='col-2'>
      <Card title ='Google App Store Analysis' 
          imageUrl='https://i.pinimg.com/originals/1a/49/22/1a49226d155846acb790eeb919f63c8e.jpg'
          body='Simple Dashboard of the Google App Store. Developed with Python, MySQL workbench, AWS and a large data set found on Kaggle.com.'
          github='https://github.com/Mannarinoo/Google-App-Store-Data-Analysis'
          redirect='/googleapp'/>
    <Card title ='Discord DevOps Bot' 
          imageUrl='https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.png'
          body='Simple DevOps-Bot that returns fun DevOps facts. Developed with Javascript.'
          github='https://github.com/eamonduffy/DevOps-Bot'/>
          </div>
    </div>
    </div>
    </div>
  )
}
export default Projects;

//img-1.jpg
//https://realsport101.com/wp-content/uploads/2020/02/Messi-Basic-1.png