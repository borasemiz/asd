import React from 'react';

import { SectionInfoBoxes } from './section-info-boxes';
import { SectionInfoBoxBg } from './section-info-box-bg';
import { SectionInfoBoxGradients } from './section-info-box-gradients';
import { SmallBox } from '../../widgets';
import { LoadingOverlay } from '../../ui-elements/general';
import { MaximizableCard } from '../../widgets/card/maximizable-card';

export const Widgets = (): React.ReactElement => (
  <React.Fragment>
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Widgets</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Widgets</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="content">
      <div className="container-fluid">
        <SectionInfoBoxes />
        <SectionInfoBoxBg />
        <SectionInfoBoxGradients />
        
        <h5 className="mb-2 mt-4">Small Box</h5>
        <div className="row">
          <div className="col-lg-3 col-6">
            <SmallBox
              backgroundClassName="info"
              value="150"
              title="New Orders"
              linkText="More info"
              renderIcon={ () => <i className="fas fa-shopping-cart"></i> }
            />
          </div>
          
          <div className="col-lg-3 col-6">
            <SmallBox
              backgroundClassName="success"
              value="53%"
              title="Bounce Rate"
              linkText="More info"
              renderIcon={ () => <i className="ion ion-stats-bars"></i> }
            />
          </div>
          
          <div className="col-lg-3 col-6">
            <SmallBox
              backgroundClassName="warning"
              value="44"
              title="User Registrations"
              linkText="More info"
              renderIcon={ () => <i className="fas fa-user-plus"></i> }
            />
          </div>
          
          <div className="col-lg-3 col-6">
            <SmallBox
              backgroundClassName="danger"
              value="65"
              title="Unique Visitors"
              linkText="More info"
              renderIcon={ () => <i className="fas fa-chart-pie"></i> }
            />
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-3 col-6">
            <SmallBox
              backgroundClassName="info"
              value="150"
              title="New Orders"
              linkText="More info"
              renderIcon={ () => <i className="fas fa-shopping-cart"></i> }
              isLoading={true}
            />
          </div>
          
          <div className="col-lg-3 col-6">
            <SmallBox
              backgroundClassName="success"
              value="53%"
              title="Bounce Rate"
              linkText="More info"
              isLoading={true}
              renderIcon={() => <i className="ion ion-stats-bars"></i>}
              renderLoading={() => <LoadingOverlay className="dark" />}
            />
          </div>
        </div>
        
        <h4 className="mb-2 mt-4">Cards</h4>
        <h5 className="mb-2">Abilities</h5>
        <div className="row">
          <div className="col-md-3">
            
            <MaximizableCard headerTitle="Fullscreen">
              <span>Card Body</span>
            </MaximizableCard>

            <div className="card collapsed-card">
              <div className="card-header">
                <h3 className="card-title">Expandable</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Collapsable</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Removable</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Maximizable</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
        </div>
        

        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Card Refresh</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="card-refresh" data-source="/pages/widgets.html" data-source-selector="#card-refresh-content"><i className="fas fa-sync-alt"></i></button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
            <div className="d-none" id="card-refresh-content">
                The body of the card after card refresh
            </div>
          </div>
          
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">All together</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="card-refresh" data-source="/pages/widgets.html" data-source-selector="#card-refresh-content"><i className="fas fa-sync-alt"></i></button>
                  <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="fas fa-expand"></i></button>
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i></button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Loading state</h3>
              </div>
              <div className="card-body">
                The body of the card
              </div>
              
              
              <div className="overlay">
                <i className="fas fa-2x fa-sync-alt"></i>
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Loading state (dark)</h3>
              </div>
              <div className="card-body">
                The body of the card
              </div>
              
              
              <div className="overlay dark">
                <i className="fas fa-2x fa-sync-alt"></i>
              </div>
              
            </div>
            
          </div>
          
        </div>
        

        

        <h5 className="mb-2">Colors Variations</h5>

        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Primary Outline</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Success Outline</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Warning Outline</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Danger Outline</h3>
              </div>
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
        </div>
        

        <div className="row">
          <div className="col-md-3">
            <div className="card card-outline">
              <div className="card-header">
                <h3 className="card-title">Primary Outline</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card card-outline">
              <div className="card-header">
                <h3 className="card-title">Success Outline</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card card-outline">
              <div className="card-header">
                <h3 className="card-title">Warning Outline</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card card-outline">
              <div className="card-header">
                <h3 className="card-title">Danger Outline</h3>
              </div>
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
        </div>
        

        <div className="row">
          <div className="col-md-3">
            <div className="card bg-primary">
              <div className="card-header">
                <h3 className="card-title">Primary</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card bg-success">
              <div className="card-header">
                <h3 className="card-title">Success</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card bg-warning">
              <div className="card-header">
                <h3 className="card-title">Warning</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card bg-danger">
              <div className="card-header">
                <h3 className="card-title">Danger</h3>
              </div>
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
        </div>
        

        <div className="row">
          <div className="col-md-3">
            <div className="card bg-gradient-primary">
              <div className="card-header">
                <h3 className="card-title">Primary Gradient</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card bg-gradient-success">
              <div className="card-header">
                <h3 className="card-title">Success Gradient</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card bg-gradient-warning">
              <div className="card-header">
                <h3 className="card-title">Warning Gradient</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                  </button>
                </div>
                
              </div>
              
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
          <div className="col-md-3">
            <div className="card bg-gradient-danger">
              <div className="card-header">
                <h3 className="card-title">Danger Gradient</h3>
              </div>
              <div className="card-body">
                The body of the card
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        <h4 className="mt-4 mb-2">Direct Chat</h4>
        <div className="row">
          <div className="col-md-3">
            
            <div className="card card-prirary cardutline direct-chat direct-chat-primary">
              <div className="card-header">
                <h3 className="card-title">Direct Chat</h3>

                <div className="card-tools">
                  <span data-toggle="tooltip" title="3 New Messages" className="badge bg-primary">3</span>
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts"
                          data-widget="chat-pane-toggle">
                    <i className="fas fa-comments"></i></button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              
              <div className="card-body">
                <div className="direct-chat-messages">
                  <div className="direct-chat-msg">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-left">Alexander Pierce</span>
                      <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                    </div>
                    <img className="direct-chat-img" src="./assets/img/user1-128x128.jpg" alt="Message User Image" />
                    <div className="direct-chat-text">
                      Is this template really for free? That's unbelievable!
                    </div>
                  </div>
                  

                  
                  <div className="direct-chat-msg right">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-right">Sarah Bullock</span>
                      <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                    </div>
                    
                    <img className="direct-chat-img" src="./assets/img/user3-128x128.jpg" alt="Message User Image" />
                    
                    <div className="direct-chat-text">
                      You better believe it!
                    </div>
                  </div>
                </div>
                
                <div className="direct-chat-contacts">
                  <ul className="contacts-list">
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="./assets/img/user1-128x128.jpg" />

                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Count Dracula
                            <small className="contacts-list-date float-right">2/28/2015</small>
                          </span>
                          <span className="contacts-list-msg">How have you been? I was...</span>
                        </div>
                        
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="card-footer">
                <form action="#" method="post">
                  <div className="input-group">
                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                    <span className="input-group-append">
                      <button type="submit" className="btn btn-primary">Send</button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          

          <div className="col-md-3">
            
            <div className="card card-sucress cardutline direct-chat direct-chat-success">
              <div className="card-header">
                <h3 className="card-title">Direct Chat</h3>

                <div className="card-tools">
                  <span data-toggle="tooltip" title="3 New Messages" className="badge bg-success">3</span>
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                    <i className="fas fa-comments"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              
              <div className="card-body">
                <div className="direct-chat-messages">
                  <div className="direct-chat-msg">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-left">Alexander Pierce</span>
                      <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                    </div>
                    
                    <img className="direct-chat-img" src="./assets/img/user1-128x128.jpg" alt="Message User Image" />
                    
                    <div className="direct-chat-text">
                      Is this template really for free? That's unbelievable!
                    </div>
                  </div>
                  
                  <div className="direct-chat-msg right">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-right">Sarah Bullock</span>
                      <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                    </div>
                    
                    <img className="direct-chat-img" src="./assets/img/user3-128x128.jpg" alt="Message User Image" />
                    
                    <div className="direct-chat-text">
                      You better believe it!
                    </div>
                  </div>
                </div>
                
                <div className="direct-chat-contacts">
                  <ul className="contacts-list">
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="./assets/img/user1-128x128.jpg" />

                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Count Dracula
                            <small className="contacts-list-date float-right">2/28/2015</small>
                          </span>
                          <span className="contacts-list-msg">How have you been? I was...</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-footer">
                <form action="#" method="post">
                  <div className="input-group">
                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                    <span className="input-group-append">
                      <button type="submit" className="btn btn-success">Send</button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card card-warning direct-chat direct-chat-warning">
              <div className="card-header">
                <h3 className="card-title">Direct Chat</h3>

                <div className="card-tools">
                  <span data-toggle="tooltip" title="3 New Messages" className="badge bg-danger">3</span>
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                    <i className="fas fa-comments"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="direct-chat-messages">
                  <div className="direct-chat-msg">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-left">Alexander Pierce</span>
                      <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                    </div>
                    <img className="direct-chat-img" src="./assets/img/user1-128x128.jpg" alt="Message User Image" />
                    <div className="direct-chat-text">
                      Is this template really for free? That's unbelievable!
                    </div>
                  </div>

                  <div className="direct-chat-msg right">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-right">Sarah Bullock</span>
                      <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                    </div>
                    <img className="direct-chat-img" src="./assets/img/user3-128x128.jpg" alt="Message User Image" />
                    <div className="direct-chat-text">
                      You better believe it!
                    </div>
                  </div>
                </div>
                <div className="direct-chat-contacts">
                  <ul className="contacts-list">
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="./assets/img/user1-128x128.jpg" />

                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Count Dracula
                            <small className="contacts-list-date float-right">2/28/2015</small>
                          </span>
                          <span className="contacts-list-msg">How have you been? I was...</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-footer">
                <form action="#" method="post">
                  <div className="input-group">
                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                    <span className="input-group-append">
                      <button type="submit" className="btn btn-warning">Send</button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card card-danger direct-chat direct-chat-danger">
              <div className="card-header">
                <h3 className="card-title">Direct Chat</h3>

                <div className="card-tools">
                  <span data-toggle="tooltip" title="3 New Messages" className="badge">3</span>
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                    <i className="fas fa-comments"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="direct-chat-messages">
                  <div className="direct-chat-msg">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-left">Alexander Pierce</span>
                      <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                    </div>
                    <img className="direct-chat-img" src="./assets/img/user1-128x128.jpg" alt="Message User Image" />
                    <div className="direct-chat-text">
                      Is this template really for free? That's unbelievable!
                    </div>
                  </div>
                  <div className="direct-chat-msg right">
                    <div className="direct-chat-infos clearfix">
                      <span className="direct-chat-name float-right">Sarah Bullock</span>
                      <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                    </div>
                    <img className="direct-chat-img" src="./assets/img/user3-128x128.jpg" alt="Message User Image" />
                    <div className="direct-chat-text">
                      You better believe it!
                    </div>
                  </div>
                </div>
                <div className="direct-chat-contacts">
                  <ul className="contacts-list">
                    <li>
                      <a href="#">
                        <img className="contacts-list-img" src="./assets/img/user1-128x128.jpg" />

                        <div className="contacts-list-info">
                          <span className="contacts-list-name">
                            Count Dracula
                            <small className="contacts-list-date float-right">2/28/2015</small>
                          </span>
                          <span className="contacts-list-msg">How have you been? I was...</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-footer">
                <form action="#" method="post">
                  <div className="input-group">
                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                    <span className="input-group-append">
                      <button type="submit" className="btn btn-danger">Send</button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-4 mb-4">Social Widgets</h3>

        <div className="row">
          <div className="col-md-4">
            <div className="card card-widget widget-user-2">
              <div className="widget-user-header bg-warning">
                <div className="widget-user-image">
                  <img className="img-circle elevation-2" src="./assets/img/user7-128x128.jpg" alt="User Avatar" />
                </div>
                <h3 className="widget-user-username">Nadia Carmichael</h3>
                <h5 className="widget-user-desc">Lead Developer</h5>
              </div>
              <div className="card-footer p-0">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Projects <span className="float-right badge bg-primary">31</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Tasks <span className="float-right badge bg-info">5</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Completed Projects <span className="float-right badge bg-success">12</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Followers <span className="float-right badge bg-danger">842</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-widget widget-user">
              <div className="widget-user-header bg-info">
                <h3 className="widget-user-username">Alexander Pierce</h3>
                <h5 className="widget-user-desc">Founder &amp; CEO</h5>
              </div>
              <div className="widget-user-image">
                <img className="img-circle elevation-2" src="./assets/img/user1-128x128.jpg" alt="User Avatar" />
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">3,200</h5>
                      <span className="description-text">SALES</span>
                    </div>
                  </div>
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">13,000</h5>
                      <span className="description-text">FOLLOWERS</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="description-block">
                      <h5 className="description-header">35</h5>
                      <span className="description-text">PRODUCTS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-widget widget-user">
              <div className="widget-user-header text-white"
                   style={{background: "url('./assets/img/photo1.png') center center" }}>
                <h3 className="widget-user-username text-right">Elizabeth Pierce</h3>
                <h5 className="widget-user-desc text-right">Web Designer</h5>
              </div>
              <div className="widget-user-image">
                <img className="img-circle" src="./assets/img/user3-128x128.jpg" alt="User Avatar" />
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">3,200</h5>
                      <span className="description-text">SALES</span>
                    </div>
                  </div>
                  <div className="col-sm-4 border-right">
                    <div className="description-block">
                      <h5 className="description-header">13,000</h5>
                      <span className="description-text">FOLLOWERS</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="description-block">
                      <h5 className="description-header">35</h5>
                      <span className="description-text">PRODUCTS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card card-widget">
              <div className="card-header">
                <div className="user-block">
                  <img className="img-circle" src="./assets/img/user1-128x128.jpg" alt="User Image" />
                  <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                  <span className="description">Shared publicly - 7:30 PM Today</span>
                </div>
                
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Mark as read">
                    <i className="far fa-circle"></i></button>
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              
              <div className="card-body">
                <img className="img-fluid pad" src="./assets/img/photo2.png" alt="Photo" />

                <p>I took this photo this morning. What do you guys think?</p>
                <button type="button" className="btn btn-default btn-sm"><i className="fas fa-share"></i> Share</button>
                <button type="button" className="btn btn-default btn-sm"><i className="far fa-thumbs-up"></i> Like</button>
                <span className="float-right text-muted">127 likes - 3 comments</span>
              </div>
              
              <div className="card-footer card-comments">
                <div className="card-comment">
                  <img className="img-circle img-sm" src="./assets/img/user3-128x128.jpg" alt="User Image" />

                  <div className="comment-text">
                    <span className="username">
                      Maria Gonzales
                      <span className="text-muted float-right">8:03 PM Today</span>
                    </span>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                  </div>
                </div>
                
                <div className="card-comment">
                  <img className="img-circle img-sm" src="./assets/img/user4-128x128.jpg" alt="User Image" />

                  <div className="comment-text">
                    <span className="username">
                      Luna Stark
                      <span className="text-muted float-right">8:03 PM Today</span>
                    </span>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                  </div>
                </div>
              </div>
              
              <div className="card-footer">
                <form action="#" method="post">
                  <img className="img-fluid img-circle img-sm" src="./assets/img/user4-128x128.jpg" alt="Alt Text" />
                  
                  <div className="img-push">
                    <input type="text" className="form-control form-control-sm" placeholder="Press enter to post comment" />
                  </div>
                </form>
              </div>
              
            </div>
          </div>
          <div className="col-md-6">
            
            <div className="card card-widget">
              <div className="card-header">
                <div className="user-block">
                  <img className="img-circle" src="./assets/img/user1-128x128.jpg" alt="User Image" />
                  <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                  <span className="description">Shared publicly - 7:30 PM Today</span>
                </div>
                
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-toggle="tooltip" title="Mark as read">
                    <i className="far fa-circle"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              
              <div className="card-body">
                <p>Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts. Separated they live in Bookmarksgrove right at</p>
                <p>the coast of the Semantics, a large language ocean.
                  A small river named Duden flows by their place and supplies
                  it with the necessary regelialia. It is a paradisematic
                  country, in which roasted parts of sentences fly into
                  your mouth.</p>
                <div className="attachment-block clearfix">
                  <img className="attachment-img" src="./assets/img/photo1.png" alt="Attachment Image" />

                  <div className="attachment-pushed">
                    <h4 className="attachment-heading">
                      <a href="http://www.lipsum.com/">Lorem ipsum text generator</a>
                    </h4>

                    <div className="attachment-text">
                      Description about the attachment can be placed here.
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="#">more</a>
                    </div>
                  </div>
                </div>
                
                <button type="button" className="btn btn-default btn-sm">
                  <i className="fas fa-share"></i> Share
                </button>
                <button type="button" className="btn btn-default btn-sm">
                  <i className="far fa-thumbs-up"></i> Like
                </button>
                <span className="float-right text-muted">45 likes - 2 comments</span>
              </div>
              
              <div className="card-footer card-comments">
                <div className="card-comment">
                  <img className="img-circle img-sm" src="./assets/img/user3-128x128.jpg" alt="User Image" />

                  <div className="comment-text">
                    <span className="username">
                      Maria Gonzales
                      <span className="text-muted float-right">8:03 PM Today</span>
                    </span>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                  </div>
                </div>
                <div className="card-comment">
                  
                  <img className="img-circle img-sm" src="./assets/img/user5-128x128.jpg" alt="User Image" />

                  <div className="comment-text">
                    <span className="username">
                      Nora Havisham
                      <span className="text-muted float-right">8:03 PM Today</span>
                    </span>
                    The point of using Lorem Ipsum is that it hrs a morer-less
                    normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English.
                  </div>
                </div>
              </div>
              
              <div className="card-footer">
                <form action="#" method="post">
                  <img className="img-fluid img-circle img-sm" src="./assets/img/user4-128x128.jpg" alt="Alt Text" />
                  
                  <div className="img-push">
                    <input type="text" className="form-control form-control-sm" placeholder="Press enter to post comment" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
