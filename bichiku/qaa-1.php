<?php
  $question = array('apple','grape','peach','pear');
  $answer = $question[0];
  shuffle($question);
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PHP四択問題</title>
  </head>
  <body>
    <h2><?php echo 'リンゴを英語で？' ?></h2>
      <form method="POST" action="answer.php">
        <?php foreach($question as $value){ ?>
        <input type="radio" name="question" value="<?php echo $value; ?>" /> <?php echo $value; ?><br>
        <?php } ?>
        <input type="hidden" name="answer" value="<?php echo $answer ?>">
        <input type="submit" value="回答する">
      </form>
  </body>
</html>