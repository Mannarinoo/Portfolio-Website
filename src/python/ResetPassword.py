from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.application import MIMEApplication
import smtplib
import sys 
import os 

name = sys.argv[1]
strFrom = sys.argv[2]
message = sys.argv[3]
strTo = 'joseph.mannarino@quinnipiac.edu'

password = 'XjmanX41'
#Get all the Names, Email Addreses, Subjects and Messages
email_content = """
<html>
  <head></head>
  <body>
    <p> From """ + name + """, """ + message + """       email:""" + strFrom + """
    </p>
  </body>
</html> 
"""

# Create the root message and fill in the from, to, and subject headers
msgRoot = MIMEMultipart('related')
msgRoot['Subject'] = 'Website Portfolio Contact'
msgRoot['From'] = strFrom
msgRoot['To'] = strTo
msgRoot.preamble = 'This is a multi-part message in MIME format.'

# Encapsulate the plain and HTML versions of the message body in an
# 'alternative' part, so message agents can decide which they want to display.
msgAlternative = MIMEMultipart('alternative')
msgRoot.attach(msgAlternative)

msgText = MIMEText("""
Turn on html emails to recieve your new password!
""")
msgAlternative.attach(msgText)

# We reference the image in the IMG SRC attribute by the ID we give it below
msgText = MIMEText(email_content, 'html')
msgAlternative.attach(msgText)

# dir_path = os.path.dirname(os.path.realpath(__file__))
# parts = os.path.split(dir_path)
# logo = parts[0] + '\src\pages\logo.png'
# fp = open(logo, 'rb')
# msgImage = MIMEImage(fp.read())
# fp.close()

# # Define the image's ID as referenced above
# msgImage.add_header('Content-ID', '<image1>')
# msgRoot.attach(msgImage)

try:
    server = smtplib.SMTP('smtp.gmail.com:587')
    server.starttls()
    server.login('joey.mannarino41@gmail.com',password)
    server.sendmail(strFrom, strTo, msgRoot.as_string())
    server.quit()
    print('Email to ' + strTo + ' successfully sent!')
except Exception as e:
    print('Email to ' + strTo +' could not be sent :( because ' + str(e))