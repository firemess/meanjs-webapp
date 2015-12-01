'use strict';

//Customers service used to communicate Customers REST endpoints
angular.module('customers')
.service('Customers', ['$resource',
	function($resource) {
		return $resource('customers/:customerId', { customerId: '@_id' },
		 {
			update: { method: 'PUT'},
		});
		 }
 ])
 .service('serviceCustomers', ['$resource',
 	function($resource) {
 		return $resource('customers/search/:customerName', { customerName: '@_name'},
 		 {
 			getByName: { method: 'GET'},
 		});
 		 }
  ])
;
