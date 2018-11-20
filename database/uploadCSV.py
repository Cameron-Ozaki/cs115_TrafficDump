from __future__ import print_function  # Python 2/3 compatibility
import boto3
import json
import decimal

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

            #readCSV = csv.DictReader(csvfile, fieldNames)
            # readCSV = csv.reader(csvfile, delimiter=',')

            response = table.update_item(
                Key={
                    'ap_id': ap_id
                },
                UpdateExpression="set x = :x, y = :y",
                # UpdateExpression="set info.rating = :r, info.plot=:p, info.actors=:a",
                ExpressionAttributeValues={
                    ':x': x,
                    ':y': y,
                },
                # ReturnValues="UPDATED_NEW"
            )

        rowNumber = rowNumber + 1
