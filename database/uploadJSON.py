import boto3
import json
import decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('localhost_test')


class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            if o % 1 > 0:
                return float(o)
            else:
                return int(o)
        return super(DecimalEncoder, self).default(o)


with open("sampleTraffic.json") as json_file:

    access_points = json.load(json_file, parse_float=decimal.Decimal)

    for point in access_points:
        host_name = point['host_name']
        host_proc = int(point['host_proc'])
        num_user = int(point['num_user'])
        tcp_con = int(point['tcp_con'])

        response = table.update_item(
            Key={
                'host_name': host_name
            },

            UpdateExpression="set host_proc = :h, num_user = :n, tcp_con = :t",

            ExpressionAttributeValues={
                ':h': host_proc,
                ':n': num_user,
                ':t': tcp_con
            }
        )
