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
export class PlayerControllerApi extends HttpRequest {

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
     * getPlayerGameStatus
     * @param {module:api/PlayerControllerApi~getPlayerGameStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GameStatusDto}
     */
    getPlayerGameStatus(file) {    
      
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

      var url = this.getBaseUrl() + '/player/game-status';
      return this.gatewayRequest(url, 'GET', null, queryParams, handleAs, formParams);  
    }

    /**
     * getPlayerSettings
     * @param {module:api/PlayerControllerApi~getPlayerSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PlayerSettingsDto}
     */
    getPlayerSettings(file) {    
      
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

      var url = this.getBaseUrl() + '/player/settings';
      return this.gatewayRequest(url, 'GET', null, queryParams, handleAs, formParams);  
    }

    /**
     * patchPlayerSettings
     * @param {module:model/PlayerSettingsDto} playerSettingsDto playerSettingsDto
     * @param {module:api/PlayerControllerApi~patchPlayerSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    patchPlayerSettings(playerSettingsDto, file) {    
      
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

      var url = this.getBaseUrl() + '/player/settings';
      return this.gatewayRequest(url, 'PATCH', playerSettingsDto, queryParams, handleAs, formParams);  
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

