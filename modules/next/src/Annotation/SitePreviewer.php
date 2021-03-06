<?php

namespace Drupal\next\Annotation;

use Drupal\Component\Annotation\Plugin;

/**
 * Defines a site_previewer annotation object.
 *
 * @Annotation
 */
class SitePreviewer extends Plugin {

  /**
   * The ID of the plugin.
   *
   * @var string
   */
  public $id;

  /**
   * The label for the plugin.
   *
   * @var string
   */
  public $label;

  /**
   * The description for the plugin.
   *
   * @var string
   */
  public $description;

}
