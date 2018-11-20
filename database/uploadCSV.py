import boto3
import csv

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('tableauTest')

with open('AP location McHenry 3.csv') as csvDataFile:
    fieldNames = ("ap_id", "x", "y")

    readCSV = csv.reader(csvDataFile, fieldNames)

    rowNumber = 0

    for row in readCSV:

        if(rowNumber > 0):
            ap_id = row[0]
            x = row[1]
            y = row[2]

            response = table.update_item(
                Key={
                    'ap_id': ap_id
                },
                UpdateExpression="set x = :x, y = :y",

                ExpressionAttributeValues={
                    ':x': x,
                    ':y': y,
                },
                # ReturnValues="UPDATED_NEW"
            )

        rowNumber = rowNumber + 1
