import * as cdk from '@aws-cdk/core';
import * as dynamo from '@aws-cdk/aws-dynamodb';

export class YataInfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const listTable = new dynamo.Table(this, 'ListTable', {
      partitionKey: {
        name: "UserID",
        type: dynamo.AttributeType.STRING
      },
      sortKey: {
        name: "ListID",
        type: dynamo.AttributeType.STRING
      },
      readCapacity: 1,
      writeCapacity: 1,
      tableName: "ListTable"
    });

    const listItemTable = new dynamo.Table(this, 'ItemsTable', {
      partitionKey: {
        name: "UserID",
        type: dynamo.AttributeType.STRING
      },
      sortKey: {
        name: "ListID-ItemID",
        type: dynamo.AttributeType.STRING
      },
      readCapacity: 1,
      writeCapacity: 1,
      tableName: "ItemsTable"
    });  
  }
}
