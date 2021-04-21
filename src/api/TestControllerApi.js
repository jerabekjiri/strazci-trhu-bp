/**
 * Spring Boot REST API
 * Employee Management REST API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */



import { HttpRequest } from '../modules/shared/services/http-request.service';
export class TestControllerApi extends HttpRequest {

    constructor(api_url) {

      super();

      if (api_url) {
        this.api_url = MySuperApp.back_end_endpoint + api_url;
      } else {
        this.api_url = MySuperApp.back_end_endpoint;
      }
    }

    getBaseUrl() {
      return this.api_url;
    }


    /**
     * testAlive
     * @param {module:api/TestControllerApi~testAliveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    testAlive(file) {    
      
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + '/test/alive';
      return this.gatewayRequest(url, 'GET', null, queryParams, handleAs, formParams);  
    }

    /**
     * testCreateNotification
     * @param {module:model/NotificationDto} notificationDto notificationDto
     * @param {module:api/TestControllerApi~testCreateNotificationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    testCreateNotification(notificationDto, file) {    
      
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + '/test/notifications';
      return this.gatewayRequest(url, 'POST', notificationDto, queryParams, handleAs, formParams);  
    }

    /**
     * testPatchGameStatus
     * @param {module:model/GameStatusDto} gameStatusDto gameStatusDto
     * @param {module:api/TestControllerApi~testPatchGameStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    testPatchGameStatus(gameStatusDto, file) {    
      
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + '/test/game-status';
      return this.gatewayRequest(url, 'PATCH', gameStatusDto, queryParams, handleAs, formParams);  
    }

    /**
     * testPushNotification
     * @param {module:model/SseNotificationDto} notification notification
     * @param {module:api/TestControllerApi~testPushNotificationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    testPushNotification(notification, file) {    
      
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + '/test/push-notification';
      return this.gatewayRequest(url, 'POST', notification, queryParams, handleAs, formParams);  
    }


  buildCollectionParam (param, collectionFormat) {
    if (!param) {
      return null;
    }
    switch (collectionFormat) {
      case 'csv':
        return param.join(',');
      case 'ssv':
        return param.join(' ');
      case 'tsv':
        return param.join('\t');
      case 'pipes':
        return param.join('|');
      case 'multi':
        // return the array directly as SuperAgent will handle it as expected
        return param;
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  };

}
