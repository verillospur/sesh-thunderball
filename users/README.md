#### *sesh-thunderball-users*
---
## Users controller

**INPUTS**
 - User
   - @username          string
   - first name         string
   - last name          string
   - name               string
   - Telegram id        int
   - profile images     array
   - bio                string
   - phone number       string
   - profile info
   - notes

**OUTPUTS**
 - id for this user     int

---
### sesh-thunderball-users-idgen

## ID Register for New Users

**INPUTS**
 - user @username       string
 - user Telegram id     int
 - date now             date

**OUTPUTS**
 - new id               int

**PROCESS**
 -  store user info against new id, so user id
      can be looked up by @username or id, or
      vice-versa