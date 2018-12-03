import threading
import boto3
import csv

dynamodb = boto3.resource('dynamodb')

tableList = ['McHenry_Floor_1', 'McHenry_Floor_2', 'McHenry_Floor_3', 'McHenry_Floor_4', 'McHenry_Floor_G',
             'SE_lower', 'SE_main', 'SE_upper']

fileList = ['AP location McHenry 1.csv', 'AP location McHenry 2.csv', 'AP location McHenry 3.csv',
            'AP location McHenry 4.csv', 'AP location McHenry G.csv', 'AP location s&e lower.csv',
            'AP location s&e main.csv', 'AP location s&e upper.csv']

table = dynamodb.Table(tableList)


def upload_csv():

    threading.Timer(60.0, upload_csv).start()

    with open(fileList) as csvDataFile:
        fieldNames = ("ap_id", "x", "y")

        readCSV = csv.reader(csvDataFile, fieldNames)

        rowNumber = 0

        for row in readCSV:

            if(rowNumber > 0):
                ap_id = row[0]
                x = row[1]
                y = row[2]

                response = table[rowNumber].update_item(
                    Key={
                        'ap_id': ap_id
                    },
                    UpdateExpression="set x = :x, y = :y",

                    ExpressionAttributeValues={
                        ':x': x,
                        ':y': y,
                    },
                )
            rowNumber = rowNumber + 1


upload_csv()
